"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

const AlertDialogComponent = ({destination}) => {
    const {_id, destinationName} = destination;

    const handleDelete = async() => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type" : "application/json"
            }
        }) 

        const data = await res.json();
        redirect("/destinations");
        // console.log("Delete Response:", data);
    }
    return (
        <AlertDialog>
            <Button variant="danger"><BiTrash /> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete <strong>{destinationName}</strong> permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default AlertDialogComponent;
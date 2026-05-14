/**
 * Generated Tool: workspacesTool_0397
 * Domain: Workspaces
 * ID: 0397
 */
exports.workspacesTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0397:', error);
    throw error;
  }
};

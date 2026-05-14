/**
 * Generated Tool: workspacesTool_0728
 * Domain: Workspaces
 * ID: 0728
 */
exports.workspacesTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0728:', error);
    throw error;
  }
};

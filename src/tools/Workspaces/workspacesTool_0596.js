/**
 * Generated Tool: workspacesTool_0596
 * Domain: Workspaces
 * ID: 0596
 */
exports.workspacesTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0596:', error);
    throw error;
  }
};

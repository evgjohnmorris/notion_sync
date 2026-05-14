/**
 * Generated Tool: workspacesTool_0513
 * Domain: Workspaces
 * ID: 0513
 */
exports.workspacesTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0513:', error);
    throw error;
  }
};

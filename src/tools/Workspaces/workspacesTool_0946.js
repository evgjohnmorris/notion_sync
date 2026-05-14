/**
 * Generated Tool: workspacesTool_0946
 * Domain: Workspaces
 * ID: 0946
 */
exports.workspacesTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0946:', error);
    throw error;
  }
};

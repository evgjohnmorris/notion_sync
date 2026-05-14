/**
 * Generated Tool: workspacesTool_0474
 * Domain: Workspaces
 * ID: 0474
 */
exports.workspacesTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0474:', error);
    throw error;
  }
};

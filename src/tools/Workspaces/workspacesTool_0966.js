/**
 * Generated Tool: workspacesTool_0966
 * Domain: Workspaces
 * ID: 0966
 */
exports.workspacesTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0966:', error);
    throw error;
  }
};

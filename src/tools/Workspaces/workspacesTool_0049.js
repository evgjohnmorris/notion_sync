/**
 * Generated Tool: workspacesTool_0049
 * Domain: Workspaces
 * ID: 0049
 */
exports.workspacesTool_0049 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0049:', error);
    throw error;
  }
};

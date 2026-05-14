/**
 * Generated Tool: workspacesTool_0826
 * Domain: Workspaces
 * ID: 0826
 */
exports.workspacesTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0826:', error);
    throw error;
  }
};

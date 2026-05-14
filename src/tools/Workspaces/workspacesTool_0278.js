/**
 * Generated Tool: workspacesTool_0278
 * Domain: Workspaces
 * ID: 0278
 */
exports.workspacesTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0278:', error);
    throw error;
  }
};

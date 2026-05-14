/**
 * Generated Tool: workspacesTool_0768
 * Domain: Workspaces
 * ID: 0768
 */
exports.workspacesTool_0768 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0768:', error);
    throw error;
  }
};

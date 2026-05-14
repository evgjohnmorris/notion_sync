/**
 * Generated Tool: workspacesTool_0332
 * Domain: Workspaces
 * ID: 0332
 */
exports.workspacesTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0332:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0189
 * Domain: Workspaces
 * ID: 0189
 */
exports.workspacesTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0189:', error);
    throw error;
  }
};

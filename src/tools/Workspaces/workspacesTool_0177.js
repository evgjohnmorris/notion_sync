/**
 * Generated Tool: workspacesTool_0177
 * Domain: Workspaces
 * ID: 0177
 */
exports.workspacesTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0177:', error);
    throw error;
  }
};

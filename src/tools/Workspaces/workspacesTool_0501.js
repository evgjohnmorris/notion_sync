/**
 * Generated Tool: workspacesTool_0501
 * Domain: Workspaces
 * ID: 0501
 */
exports.workspacesTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0501:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0325
 * Domain: Workspaces
 * ID: 0325
 */
exports.workspacesTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0325:', error);
    throw error;
  }
};

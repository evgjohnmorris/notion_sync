/**
 * Generated Tool: workspacesTool_0247
 * Domain: Workspaces
 * ID: 0247
 */
exports.workspacesTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0247:', error);
    throw error;
  }
};

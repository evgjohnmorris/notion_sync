/**
 * Generated Tool: workspacesTool_0214
 * Domain: Workspaces
 * ID: 0214
 */
exports.workspacesTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0214:', error);
    throw error;
  }
};

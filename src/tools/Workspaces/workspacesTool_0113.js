/**
 * Generated Tool: workspacesTool_0113
 * Domain: Workspaces
 * ID: 0113
 */
exports.workspacesTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0113:', error);
    throw error;
  }
};

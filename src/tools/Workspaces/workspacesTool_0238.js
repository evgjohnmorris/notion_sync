/**
 * Generated Tool: workspacesTool_0238
 * Domain: Workspaces
 * ID: 0238
 */
exports.workspacesTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0238:', error);
    throw error;
  }
};

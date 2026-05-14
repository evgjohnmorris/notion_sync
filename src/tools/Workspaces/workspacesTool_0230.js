/**
 * Generated Tool: workspacesTool_0230
 * Domain: Workspaces
 * ID: 0230
 */
exports.workspacesTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0230:', error);
    throw error;
  }
};

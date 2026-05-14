/**
 * Generated Tool: workspacesTool_0388
 * Domain: Workspaces
 * ID: 0388
 */
exports.workspacesTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0388:', error);
    throw error;
  }
};

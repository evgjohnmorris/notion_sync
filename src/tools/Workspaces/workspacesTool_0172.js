/**
 * Generated Tool: workspacesTool_0172
 * Domain: Workspaces
 * ID: 0172
 */
exports.workspacesTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0172:', error);
    throw error;
  }
};

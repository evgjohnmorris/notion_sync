/**
 * Generated Tool: workspacesTool_0738
 * Domain: Workspaces
 * ID: 0738
 */
exports.workspacesTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0738:', error);
    throw error;
  }
};

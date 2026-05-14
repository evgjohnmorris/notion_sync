/**
 * Generated Tool: workspacesTool_0730
 * Domain: Workspaces
 * ID: 0730
 */
exports.workspacesTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0730:', error);
    throw error;
  }
};

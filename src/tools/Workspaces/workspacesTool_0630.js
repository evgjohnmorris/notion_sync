/**
 * Generated Tool: workspacesTool_0630
 * Domain: Workspaces
 * ID: 0630
 */
exports.workspacesTool_0630 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0630:', error);
    throw error;
  }
};

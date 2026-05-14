/**
 * Generated Tool: workspacesTool_0150
 * Domain: Workspaces
 * ID: 0150
 */
exports.workspacesTool_0150 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0150:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0047
 * Domain: Workspaces
 * ID: 0047
 */
exports.workspacesTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0047:', error);
    throw error;
  }
};

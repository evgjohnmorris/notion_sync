/**
 * Generated Tool: workspacesTool_0305
 * Domain: Workspaces
 * ID: 0305
 */
exports.workspacesTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0305:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0470
 * Domain: Workspaces
 * ID: 0470
 */
exports.workspacesTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0470:', error);
    throw error;
  }
};

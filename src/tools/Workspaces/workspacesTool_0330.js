/**
 * Generated Tool: workspacesTool_0330
 * Domain: Workspaces
 * ID: 0330
 */
exports.workspacesTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0330:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0292
 * Domain: Workspaces
 * ID: 0292
 */
exports.workspacesTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0292:', error);
    throw error;
  }
};

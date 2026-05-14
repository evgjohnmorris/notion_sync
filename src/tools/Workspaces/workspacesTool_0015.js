/**
 * Generated Tool: workspacesTool_0015
 * Domain: Workspaces
 * ID: 0015
 */
exports.workspacesTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0015:', error);
    throw error;
  }
};

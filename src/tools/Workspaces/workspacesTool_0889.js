/**
 * Generated Tool: workspacesTool_0889
 * Domain: Workspaces
 * ID: 0889
 */
exports.workspacesTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0889:', error);
    throw error;
  }
};

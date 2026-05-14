/**
 * Generated Tool: workspacesTool_0094
 * Domain: Workspaces
 * ID: 0094
 */
exports.workspacesTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0094:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0649
 * Domain: Workspaces
 * ID: 0649
 */
exports.workspacesTool_0649 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0649:', error);
    throw error;
  }
};

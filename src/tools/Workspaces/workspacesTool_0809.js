/**
 * Generated Tool: workspacesTool_0809
 * Domain: Workspaces
 * ID: 0809
 */
exports.workspacesTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0809:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0923
 * Domain: Workspaces
 * ID: 0923
 */
exports.workspacesTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0923:', error);
    throw error;
  }
};

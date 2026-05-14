/**
 * Generated Tool: workspacesTool_0062
 * Domain: Workspaces
 * ID: 0062
 */
exports.workspacesTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0062:', error);
    throw error;
  }
};

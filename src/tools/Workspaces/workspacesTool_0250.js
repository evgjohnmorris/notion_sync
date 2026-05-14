/**
 * Generated Tool: workspacesTool_0250
 * Domain: Workspaces
 * ID: 0250
 */
exports.workspacesTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0250:', error);
    throw error;
  }
};

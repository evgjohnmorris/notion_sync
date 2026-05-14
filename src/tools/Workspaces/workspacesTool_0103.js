/**
 * Generated Tool: workspacesTool_0103
 * Domain: Workspaces
 * ID: 0103
 */
exports.workspacesTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0103:', error);
    throw error;
  }
};

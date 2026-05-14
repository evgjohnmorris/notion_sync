/**
 * Generated Tool: workspacesTool_0173
 * Domain: Workspaces
 * ID: 0173
 */
exports.workspacesTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0173:', error);
    throw error;
  }
};

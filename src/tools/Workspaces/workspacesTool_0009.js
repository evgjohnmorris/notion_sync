/**
 * Generated Tool: workspacesTool_0009
 * Domain: Workspaces
 * ID: 0009
 */
exports.workspacesTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0009:', error);
    throw error;
  }
};

/**
 * Generated Tool: workspacesTool_0621
 * Domain: Workspaces
 * ID: 0621
 */
exports.workspacesTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0621:', error);
    throw error;
  }
};

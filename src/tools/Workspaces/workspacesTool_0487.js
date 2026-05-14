/**
 * Generated Tool: workspacesTool_0487
 * Domain: Workspaces
 * ID: 0487
 */
exports.workspacesTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0487:', error);
    throw error;
  }
};

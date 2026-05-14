/**
 * Generated Tool: workspacesTool_0797
 * Domain: Workspaces
 * ID: 0797
 */
exports.workspacesTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0797:', error);
    throw error;
  }
};

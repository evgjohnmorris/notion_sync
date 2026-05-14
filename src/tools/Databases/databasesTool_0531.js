/**
 * Generated Tool: databasesTool_0531
 * Domain: Databases
 * ID: 0531
 */
exports.databasesTool_0531 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0531:', error);
    throw error;
  }
};

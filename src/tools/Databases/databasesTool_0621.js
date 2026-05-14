/**
 * Generated Tool: databasesTool_0621
 * Domain: Databases
 * ID: 0621
 */
exports.databasesTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0621:', error);
    throw error;
  }
};

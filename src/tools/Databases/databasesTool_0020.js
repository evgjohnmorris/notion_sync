/**
 * Generated Tool: databasesTool_0020
 * Domain: Databases
 * ID: 0020
 */
exports.databasesTool_0020 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0020:', error);
    throw error;
  }
};

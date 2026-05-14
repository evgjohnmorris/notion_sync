/**
 * Generated Tool: databasesTool_0603
 * Domain: Databases
 * ID: 0603
 */
exports.databasesTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0603:', error);
    throw error;
  }
};

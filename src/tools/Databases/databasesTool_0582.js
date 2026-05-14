/**
 * Generated Tool: databasesTool_0582
 * Domain: Databases
 * ID: 0582
 */
exports.databasesTool_0582 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0582:', error);
    throw error;
  }
};
